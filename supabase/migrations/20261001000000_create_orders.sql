-- =============================================================================
-- Home Essentials — Grandmaster Pro Orders
-- Supabase Migration: Create orders table
--
-- Apply via: Supabase Dashboard > SQL Editor, or `supabase db push`
-- =============================================================================

-- Enable UUID extension (usually already enabled on Supabase)
create extension if not exists "pgcrypto";

-- ─── Orders table ──────────────────────────────────────────────────────────
create table if not exists public.orders (
  id                uuid          primary key default gen_random_uuid(),
  order_reference   text          not null unique,

  -- Customer
  customer_name     text          not null,
  customer_phone    text          not null,
  customer_whatsapp text,
  customer_email    text,

  -- Delivery
  delivery_state    text          not null,
  delivery_city     text          not null,
  delivery_address  text          not null,

  -- Product
  product_slug      text          not null,
  variant_id        text          not null,
  variant_name      text          not null,
  quantity          integer       not null check (quantity >= 1 and quantity <= 100),
  unit_price_kobo   bigint        not null check (unit_price_kobo >= 0),
  total_kobo        bigint        not null check (total_kobo >= 0),
  currency          text          not null default 'NGN',

  -- Notes
  order_notes       text,

  -- Status
  order_status      text          not null default 'pending'
                    check (order_status in ('pending','confirmed','shipped','delivered','cancelled','refunded')),

  -- Attribution (for ad tracking, never used for pricing)
  utm_source        text,
  utm_medium        text,
  utm_campaign      text,
  utm_content       text,
  utm_term          text,
  fbclid            text,
  ttclid            text,

  -- Audit
  created_at        timestamptz   not null default now(),
  updated_at        timestamptz   not null default now()
);

-- ─── Indexes ───────────────────────────────────────────────────────────────
create index if not exists orders_order_reference_idx on public.orders (order_reference);
create index if not exists orders_customer_phone_idx  on public.orders (customer_phone);
create index if not exists orders_created_at_idx      on public.orders (created_at desc);
create index if not exists orders_product_slug_idx    on public.orders (product_slug);
create index if not exists orders_status_idx          on public.orders (order_status);

-- ─── Auto-update updated_at ────────────────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger orders_updated_at
  before update on public.orders
  for each row execute procedure public.set_updated_at();

-- ─── Row Level Security ────────────────────────────────────────────────────
alter table public.orders enable row level security;

-- Deny all access to the anon role (public browser)
-- Orders are written ONLY via the service-role key (server-side API route)
create policy "deny_anon_select" on public.orders
  for select to anon using (false);

create policy "deny_anon_insert" on public.orders
  for insert to anon with check (false);

create policy "deny_anon_update" on public.orders
  for update to anon using (false);

create policy "deny_anon_delete" on public.orders
  for delete to anon using (false);

-- Service role bypasses RLS automatically — no policy needed for it.
-- If you add an admin dashboard, create authenticated-role policies here.

-- ─── Comments ─────────────────────────────────────────────────────────────
comment on table  public.orders                is 'Customer orders for Home Essentials products';
comment on column public.orders.order_reference is 'Human-readable reference shown to customer (e.g. HE-ABC12345)';
comment on column public.orders.unit_price_kobo is 'Price per unit in Naira kobo (100 kobo = ₦1). Set server-side; never from client.';
comment on column public.orders.total_kobo      is 'Total order value in kobo. Always unit_price_kobo * quantity.';
comment on column public.orders.fbclid          is 'Meta (Facebook) click ID for conversion tracking — never used for pricing';
comment on column public.orders.ttclid          is 'TikTok click ID for conversion tracking — never used for pricing';
