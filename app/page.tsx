"use client";

import axios from "axios";
import { useState } from "react";

const payLoad = {
    name: "Nasif",
    year: "2023",
    month: "February",
};

export default function Page() {
    const [data, setData] = useState<(typeof payLoad)[]>([
        {
            name: "NONE",
            year: "NONE",
            month: "NONE",
        },
    ]);
    const [loading, setLoading] = useState(false);

    async function handleClick() {
        setLoading(true);
        console.log("Button clicked !");

        await axios.post("api/test", payLoad).then(async (res) => {
            await axios
                .get("api/test")
                .then((res) => {
                    console.log("Got data", res.data);
                    setData(res.data);
                    console.log(res.data);
                })
                .then((res) => {
                    setLoading(false);
                });
        });
    }
    return (
        <div>
            <button onClick={() => handleClick()}>CLICK ME</button>
            {loading ? (
                <div>LOADING......</div>
            ) : (
                data &&
                data.map((data, index) => (
                    <div key={index}>
                        <hr />
                        <div>{data.name}</div>
                        <div>{data.year}</div>
                        <div>{data.month}</div>
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
}
