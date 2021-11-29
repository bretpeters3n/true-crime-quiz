import * as React from "react";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function GetQuestionsByAuth(){

    const { user } = useAuth0();

    const getQuestionsByAuth = async () => {
        if (!user) {
            return
        }
        console.log("getQuestionsFromDB function entered");
        let id = user.sub;
        console.log(id);
        const response = await fetch(`/api/questions/${id}`);
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        getQuestionsByAuth();
    }, [user]);

    return (
        <div>

        </div>
    )
};
