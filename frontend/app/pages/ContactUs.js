import React, {useState} from 'react'
import Layout from "../components/containers/Layout"

function ContactUs() {
    const [search, setSearch] = useState("")
    return (
        <Layout searchState={[search, setSearch]}>
            <h1>Leave a message and I'll get back to you!</h1>
        </Layout>
    )
}

export default ContactUs
