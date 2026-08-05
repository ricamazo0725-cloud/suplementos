import React from 'react';
import { Helmet } from 'react-helmet';
import ProductsList from '@/components/ProductsList';

const CatalogPage = ({ title = 'Productos', kicker = 'Catálogo', description = 'Proteínas, aminoácidos, creatina y pre-entrenos de marcas establecidas.' }) => (
  <>
    <Helmet>
      <title>{`${title} | IronFuel Suplementos`}</title>
      <meta name="description" content={description} />
    </Helmet>
    <section className="border-b border-border bg-[#0b0b0b]">
      <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-8">
        <p className="font-display text-xs font-bold tracking-[0.3em] text-primary">{kicker}</p>
        <h1 className="mt-3 font-display text-5xl font-extrabold">{title}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p>
      </div>
    </section>
    <section className="mx-auto max-w-[90rem] px-4 py-16 sm:px-8">
      <ProductsList />
    </section>
  </>
);

export default CatalogPage;
