import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "../types";

import useLoginModal from "./useLoginModal";

interface IUseFavourite {
    listingId: string;
    currentUser?: SafeUser | null;
}

const useFavourite = ({ listingId, currentUser }: IUseFavourite) => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const hasFavourited = useMemo(() => {
        const list = currentUser?.favouriteIds || [];
        return list.includes(listingId);
    }, [currentUser, listingId]);

    const toggleFavourite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        // If user is not logged in, redirect to login
        if(!currentUser){
            return loginModal.onOpen();
        }

        try {
            let request;
            if(hasFavourited){
                request = () => axios.delete(`/api/favourites/${listingId}`);
            } else{
                request = () => axios.post(`/api/favourites/${listingId}`);
            }
            await request();
            router.refresh();
            toast.success("Success");
        } catch (error) {
            toast.error('Action went wrong, try again');
        }

    }, [
        currentUser, hasFavourited, listingId, loginModal, router
    ])

    return {hasFavourited, toggleFavourite};
}

export default useFavourite;