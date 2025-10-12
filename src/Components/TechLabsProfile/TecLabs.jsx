import React from "react";
import useData from "../../Hooks/useData";

const TecLabs = () => {
    const { heroData } = useData();
    

    return (
        <section>
            <h1>{heroData?.title}</h1>
            
        </section>
    );
};

export default TecLabs;
