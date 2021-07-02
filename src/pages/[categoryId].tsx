import React, { useEffect, useState } from 'react'
import { createServer } from "miragejs"
import { GetServerSideProps } from 'next'
import { api } from '../services/api'
import Head from 'next/head'
import { BottomComponent } from '../components/BottomComponent'
import { HeaderComponent } from '../components/HeaderComponent'
import { CatalogComponent } from '../components/CatalogComponent'


interface PageProps{
    categories: Array<CategoriesProps>;
    category: CategoryProps;
    categoryId: number;
}

interface CategoriesProps {
    id: number;
    name: string;
}

interface CategoryProps {
    filter: {
        color: string;
    }
    items: {
        id: number;
        image: string;
        name: string;
        price: number;
    }[]
}


export default function categoryId({ categories, category, categoryId }: PageProps) {
    return (
        <>
            <Head>
                <title>Webjump - Desafio Frontend</title>
            </Head>
            <HeaderComponent 
                categories={categories}
            />
            <CatalogComponent
                category={category}
                categories={categories}
                categoryId={categoryId}
            />
            <BottomComponent />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { categoryId } = params;

    const categories = await api.get("/api/V1/categories/list");

    const category = await api.get(`/api/V1/categories/${categoryId}`);

    return {
        props: {
            categoryId: parseInt(categoryId.toString()),
            categories: categories.data.items,
            category: category.data
        }
    }
}
