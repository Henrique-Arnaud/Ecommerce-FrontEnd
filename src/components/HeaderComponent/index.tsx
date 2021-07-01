import React from "react";
import { FiMenu, FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import { Container, Header, Menu, TopBar } from "./style";

interface PageProps {
    categories: Array<CategoriesProps>;
}
interface CategoriesProps {
    id: number;
    name: string;
}

export function HeaderComponent({ categories }: PageProps) {
    return (
        <Container>
            <TopBar>
                <div>
                    <p>
                        <a href="#">Acesse sua Conta</a> ou <a href="#">Cadastre-se</a>
                    </p>
                </div>
            </TopBar>
            <Header>
                <FiMenu className="menu" />
                <div>
                    <a href="/">
                        <img src="/logo.jpg" alt="Logo da empresa WebJump" />
                    </a>
                </div>
                <FiSearch className="searchIcon" />
                <div className="searchArea">
                    <input type="text" />
                    <button>BUSCAR</button>
                </div>
            </Header>
            <Menu>
                <div>
                    <a href="">PÁGINA INICIAL</a>
                    {categories &&
                        categories.map(category => {
                            return (
                                <a href={`/${category.id}`}>{category.name.toUpperCase()}</a>
                            );
                        })             
                    }
                    <a href="">CONTATO</a>
                </div>
            </Menu>
        </Container>
    );
}