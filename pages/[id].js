import { useRouter } from 'next/router';
import products from '../products.json';

export default function Product() {
    const route = useRouter();
    const { id } = route.query;
    const product = products.find(p => id === p.id);

    if (!product) return null;

    return (
        <div>
            {product.name}
        </div>
    )
}