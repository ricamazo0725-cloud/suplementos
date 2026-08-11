import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Dumbbell, Zap, HeartPulse, ShieldCheck, Truck, CreditCard, Building2 } from 'lucide-react';
import ProductsList from '@/components/ProductsList';

const nutrition = [
  { label: 'Proteína de res aislada', value: '23 g', note: 'Alta en aminoácidos esenciales para crecimiento y reparación muscular.' },
  { label: 'Creatina monohidratada', value: '2.5 g', note: 'Aumenta la fuerza, potencia y rendimiento físico.' },
  { label: 'BCAA (aminoácidos ramificados)', value: '5.5 g', note: 'Leucina, isoleucina y valina para la síntesis de proteína.' },
  { label: 'Aminoácidos totales', value: '18 g', note: 'Incluye todos los aminoácidos esenciales y no esenciales.' },
];

const HomePage = () => (
  <>
    <Helmet>
      <title>GLJSUPLEMENTOS</title>
      <meta name="description" content="Tienda en línea de suplementos deportivos originales: proteína de res y suero, creatina, BCAA y pre-entrenos. Envío gratis desde $250.000 COP en Colombia." />
    </Helmet>

    <section className="relative flex min-h-[100dvh] items-center overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(220,20,20,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(250,170,20,0.18),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 1px, transparent 1px 26px)' }} />
      <div className="relative mx-auto grid w-full max-w-[90rem] items-center gap-12 px-4 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="mb-5 inline-block border border-primary px-3 py-1 font-display text-xs font-bold tracking-widest text-primary">
            Distribuidor autorizado · Marcas establecidas
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-display text-[clamp(3rem,9vw,6.5rem)] font-extrabold leading-[0.88]">
            Fuerza que<br /><span className="text-primary">se construye</span>
          </motion.h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Proteína de alta calidad, creatina y aminoácidos para resultados reales. Suplementos originales, con información nutricional completa y envío a todo el país.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/productos" className="flex h-12 items-center rounded-sm bg-primary px-7 font-display text-lg font-bold text-primary-foreground transition active:scale-[0.98]">
              Ver productos
            </Link>
            <Link to="/combos" className="flex h-12 items-center rounded-sm border border-border px-7 font-display text-lg font-bold transition hover:border-primary active:scale-[0.98]">
              Combos con descuento
            </Link>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-border border-y border-border">
            {[['0%', 'Grasa'], ['0%', 'Azúcar'], ['0%', 'Colesterol']].map(([v, l]) => (
              <div key={l} className="px-4 py-5">
                <dt className="font-display text-3xl font-extrabold text-primary">{v}</dt>
                <dd className="text-xs uppercase tracking-widest text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card rounded-sm p-7">
          <h2 className="font-display text-2xl font-bold">Lo que contiene cada porción</h2>
          <p className="mt-1 text-sm text-muted-foreground">1 medida = 35 g</p>
          <ul className="mt-6 divide-y divide-border">
            {nutrition.map((n) => (
              <li key={n.label} className="flex items-start gap-4 py-4">
                <div className="flex-1">
                  <p className="font-semibold">{n.label}</p>
                  <p className="text-sm text-muted-foreground">{n.note}</p>
                </div>
                <span className="font-display text-xl font-extrabold text-accent">{n.value}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {[[Dumbbell, 'Más músculo'], [HeartPulse, 'Recuperación rápida'], [Zap, 'Más energía'], [ShieldCheck, 'Soporte inmune']].map(([Icon, label]) => (
              <div key={label} className="flex items-center gap-2 border border-border px-3 py-2">
                <Icon size={16} className="text-primary" strokeWidth={2} /> {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-8">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-4xl font-extrabold">Los más vendidos</h2>
          <p className="mt-2 text-muted-foreground">Stock real y actualizado. Precios en pesos colombianos.</p>
        </div>
        <Link to="/productos" className="font-display font-bold text-primary hover:underline">Ver catálogo completo</Link>
      </div>
      <ProductsList limit={4} />
    </section>

    <section className="border-y border-border bg-[#0b0b0b]">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-16 sm:px-8 lg:grid-cols-3">
        {[
          [Truck, 'Envíos a todo Colombia', 'Gratis desde $250.000 COP. Entregas en 24-72 horas en ciudades principales con guía de rastreo.'],
          [CreditCard, 'Paga como prefieras', 'Tarjeta de crédito y débito, PSE, Nequi o transferencia bancaria en un checkout seguro.'],
          [Building2, 'Inventario verificado', 'Cada producto muestra existencias reales; si queda poco stock lo verás antes de comprar.'],
        ].map(([Icon, title, text]) => (
          <div key={title} className="border-t-2 border-primary pt-5">
            <Icon className="mb-4 text-primary" strokeWidth={2} />
            <h3 className="font-display text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="mx-auto grid max-w-[72rem] gap-10 px-4 py-20 sm:px-8 lg:grid-cols-2">
      <div>
        <h2 className="font-display text-4xl font-extrabold">Modo de uso</h2>
        <p className="mt-4 text-muted-foreground">
          Mezcla 1 medida (35 g) con 200-250 ml de agua fría. Consume después del entrenamiento o como suplemento diario.
          Para ganancia de masa, dos porciones al día en dietas altas en proteína y bajas en grasa.
        </p>
        <ol className="mt-8 space-y-4">
          {['Mezcla', 'Agita', 'Disfruta'].map((s, i) => (
            <li key={s} className="flex items-center gap-4 border border-border px-4 py-3">
              <span className="font-display text-2xl font-extrabold text-primary">{i + 1}</span>
              <span className="font-display text-lg font-bold">{s}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="border border-border">
        <p className="border-b border-border bg-secondary px-5 py-3 font-display text-sm font-bold tracking-widest">
          Información nutricional aprox. por porción (35 g)
        </p>
        <table className="w-full text-sm">
          <tbody className="divide-y divide-border">
            {[['Calorías', '120 kcal'], ['Proteína', '23 g'], ['Grasa total', '0 g'], ['Carbohidratos', '2 g'], ['Azúcares', '0 g'], ['Sodio', '200 mg']].map(([k, v]) => (
              <tr key={k}>
                <td className="px-5 py-3 text-muted-foreground">{k}</td>
                <td className="px-5 py-3 text-right font-semibold">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </>
);

export default HomePage;
