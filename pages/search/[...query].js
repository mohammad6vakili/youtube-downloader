import { useRouter } from 'next/router';
import React from 'react'

export default function Query() {
    const route = useRouter();
    const { query } = route.query;
    return (
        <div>
            {query}
        </div>
    )
}
