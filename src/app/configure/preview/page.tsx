import { db } from "@/db"
import { notFound } from "next/navigation"
import DesignPreview from "./DesignPreview"

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}


const Page = async ({searchParams}: PageProps) => {
    const {id} = searchParams

    if(!id || typeof id !== 'string') {
        return notFound()
    }

    const configuratiin = await db.configuration.findUnique({
        where: { id },
    })

    if (!configuratiin) {
        return notFound()
    }





    return <DesignPreview configuration={configuratiin} />
}

export default Page