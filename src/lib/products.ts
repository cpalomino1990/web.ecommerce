import { collection, doc, getDoc, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "./auth";
import { Product } from "@/models/product";


export const getProducts = async (): Promise<{ data: Product[]; lastVisible: number }> => {

    try {

        const productsRef = collection(db, "products");
        const firstQuery = query(productsRef, orderBy("name"), limit(6));

        try {
            const querySnapshot = await getDocs(firstQuery);

            const products = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data() as Omit<Product, 'id'>,
            }));
            const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
            const lastVisible = lastVisibleDoc ? lastVisibleDoc.data().timestamp : 0;

            console.log('Products on this page:', products);
            console.log('Last visible document:', lastVisible);

            return {
                data: products,
                lastVisible
            }

        } catch (error) {
            console.error("Error getting products:", error);
            return {
                data: [],
                lastVisible: 0
            };
        }
    } catch {
        throw new Error('Error retrieved the products.');
    }
};



export const getProduct = async (productId: string): Promise<{ data: Product | null }> => {
    try {
        const productRef = doc(db, "products", productId);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
            const product = productSnap.data() as Product;
            console.log('Product:', product);
            return {
                data: product,
            };
        } else {
            console.log('No such product!');
            return {
                data: null
            };
        }
    } catch (error) {
        console.error("Error getting product:", error);
        return {
            data: null
        };
    }
};
