import Head from 'next/head'
import { createServer } from "miragejs"
import { api } from '../services/api'
import React, { useCallback, useEffect, useState } from 'react'
import { HeaderComponent } from '../components/HeaderComponent'
import { IndexPageComponent } from '../components/IndexPageComponent'
import { BottomComponent } from '../components/BottomComponent'
import { GetServerSideProps, GetStaticProps } from 'next'

interface PageProps{
    categories: Array<CategoriesProps>;
}
interface CategoriesProps {
    id: number;
    name: string;
}
export default function Home({ categories }: PageProps) {

    return (
        <>
             <HeaderComponent
                categories={categories}
            />
            <IndexPageComponent 
                categories={categories}
            /> 
            <BottomComponent/>
        </>
    )
} 

export const getStaticProps: GetStaticProps = async () => {

    const categories = await api.get("/api/V1/categories/list");

    return {
        props: {
            categories: categories.data.items,
        },
        revalidate: 60 * 5
    }
}
