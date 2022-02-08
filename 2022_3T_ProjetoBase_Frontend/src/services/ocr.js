import axios from "axios"

export const lerConteudoDaImagem = async (formData) => {

    let resultado
    await axios({
        method: "post",
        url: "https://equipamentos-senai-ocr.cognitiveservices.azure.com/vision/v3.2/ocr?language=unk&detectOrientation=true&model-version=latest",
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
            "Ocp-Apim-Subscription-Key": "3f9fb027e18d46139e287e6890bb2d84"
        },
    })
        .then(response => (
            // console.log(response),
            resultado = LerJSON(response.data)
        ))
        .catch(erro => (
            console.log(erro)
        ))

    return resultado
}

export const LerJSON = async (obj) => {
    let resultado;
    obj.regions.forEach(regions => {
        regions.lines.forEach(lines => {
            lines.words.forEach(words => {
                if(words.text[0] === "1" && words.text[1] === "2")
                {
                    resultado = words.text;
                }
            })
        })
    })

    return resultado
}