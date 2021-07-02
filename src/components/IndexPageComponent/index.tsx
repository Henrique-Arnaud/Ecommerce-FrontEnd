import React from "react";
import Link from 'next/link';
import { Container, Menu, Carousel, Welcome } from "./style";

interface PageProps {
    categories: Array<CategoriesProps>;
}
interface CategoriesProps {
    id: number;
    name: string;
}

export function IndexPageComponent({ categories }: PageProps) {

    return (
        <Container>
            <div>
                <Menu>
                    <menu>

                        <li>
                            <Link href="/">
                                Página Inicial
                            </Link>
                        </li>
                        {categories &&
                            categories.map(category => {
                                return (
                                    <li key={category.id}>
                                        <Link href={`/${category.id}`}>{category.name}</Link>
                                    </li>
                                );
                            })
                        }
                        <li>
                            <Link href="">Contato</Link>
                        </li>
                    </menu>
                </Menu>
                <div className="col">
                    <Carousel>

                    </Carousel>

                    <Welcome>
                        <h1>Seja bem-vindo!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ut delectus in est, voluptate consectetur ratione voluptates eos totam minima ipsa, quas quisquam dolores sed, esse voluptatum expedita cumque aspernatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, provident! Commodi maiores reprehenderit magnam sapiente similique obcaecati magni iste accusantium autem ipsa aperiam, quis tempore natus culpa, reiciendis explicabo error! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime non libero quos architecto perspiciatis atque a ipsam, obcaecati nemo rerum saepe. Dolorum magni eius cum repellat iure a inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit dignissimos, ab enim ducimus, natus maiores quo esse veritatis porro molestias id sit temporibus sequi quos, impedit cumque nesciunt facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maiores ad voluptas sapiente accusantium quis eligendi maxime atque minus numquam possimus culpa ut sint itaque facilis, sed molestias inventore recusandae.</p>
                    </Welcome>
                </div>
            </div>

        </Container>
    );
}