import '../../../../styles/Education/template4.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';


function EducationTemplate4() {
    let [indexOfQuestion, setIndexOfQuestion] = useState(0);


    const quizz = [
        {
            "question": "Google (www.google.com) is a : ",
            "reponseA": "Number in math",
            "reponseB": "Search engine",
            "reponseC": "Directory of images",
            "reponseD": "Chat service on web",
            "reponse_exacte": ["reponseB"],
            "temps": 11,
        },
        {
            "question": "<code>console.log(0.1 + 0.2 == 0.3);</code>",
            "reponseA": "true",
            "reponseB": "false",
            "reponse_exacte": ["reponseB"],
            "temps": 12,
        }
        ,
        {
            "question": " PHP Stands for",
            "reponseA": "Php Hypertext Processor",
            "reponseB": "Php Hypertext Preprocessor",
            "reponseC": "Php Hypermarkup Preprocessor",
            "reponseD": "Php Hypermarkup Processor",
            "reponse_exacte": ["reponseB"],
            "temps": 13,
        }
    ]
    let [score, setScore] = useState(0);

    const commencerQuizz = () => {
        document.getElementById('div-quizz-container').style.display = "block";
        document.getElementById('div-quizz-commencer').style.display = "none";
    }

    const getResults = () => {


        // LOOP FOR GOING THROUGH ALL QUESTIONS
        //  for (let i = 0; i < nbquestions; i++) {
        let radiosName = document.getElementsByName('quizzQ' + indexOfQuestion);
        //LOOP FOR CHECKING ANSWERS INSIDE EACH RADIO
        for (var j = 0; j < radiosName.length; j++) {
            let label;
            if (j == 0) {
                label = document.getElementById("label" + indexOfQuestion + "A")
            }
            if (j == 1) {
                label = document.getElementById("label" + indexOfQuestion + "B")
            }
            if (j == 2) {
                label = document.getElementById("label" + indexOfQuestion + "C")
            }
            if (j == 3) {
                label = document.getElementById("label" + indexOfQuestion + "D")
            }



            var radiosValue = radiosName[j];
            radiosValue.disabled = true;

            if (radiosValue.value == quizz[indexOfQuestion].reponse_exacte[0] && radiosValue.checked) {

                radiosValue.style.backgroundColor = "green";
                label.style.color = "green";
                setScore(score + 1);
            }

            if (radiosValue.value != quizz[indexOfQuestion].reponse_exacte[0] && radiosValue.checked) {
                label.style.color = "red";
                label.style.textDecoration = "line-through";

            }

            if (radiosValue.value == quizz[indexOfQuestion].reponse_exacte[0]) {
                label.style.backgroundColor = "#b1d9b1";
                label.style.padding = "1.5px";
            }
        }


        // setTimeout(next(), 9000)
        // }
    }
    
    const next = () => {
        if (quizz.length > indexOfQuestion + 1) {
            setIndexOfQuestion(indexOfQuestion + 1);
        }
        else
            getAllResults();



        let radiosName = document.getElementsByName('quizzQ' + indexOfQuestion);
        radiosName.forEach(radioinput => {
            radioinput.disabled = false;
            radioinput.checked = false
        })


        const labels = document.querySelectorAll('label')

        for (let i = 0; i < labels.length; i++) {

            labels[i].style.backgroundColor = "white";
            labels[i].style.color = "black";
            labels[i].style.padding = "1.5px";
            labels[i].style.textDecoration = "none";
        }
    }

    const getAllResults = () => {
        <div>
            Votre score : { score } / { quizz.length }
        </div>
    }

    return (
        <div className="div-quizz-body d-flex justify-content-center align-items-center">
            <div id="div-quizz-commencer" onClick={commencerQuizz}>
                <button className='btn btn-light'>Commencer le quizz</button>
            </div>
            <div className="div-quizz-container" id="div-quizz-container">
                <div className="d-flex justify-content-between align-items-center"
                    style={{ padding: "15px 0", borderBottom: "2px solid #8c34e7" }}>
                    <div> {indexOfQuestion + 1} of {quizz.length} questions </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <div>Score : {score}/{quizz.length} </div>
                    </div>
                </div>
                <p id="quiz-question">{quizz[indexOfQuestion].question} </p>
                <label className="form-control" id={"label" + indexOfQuestion + "A"}>
                    <input type="radio" name={"quizzQ" + indexOfQuestion} value="reponseA" />
                    {quizz[indexOfQuestion].reponseA}
                </label>

                <label className="form-control" id={"label" + indexOfQuestion + "B"} >
                    <input type="radio" name={"quizzQ" + indexOfQuestion} value="reponseB" />
                    {quizz[indexOfQuestion].reponseB}
                </label>
                {quizz[indexOfQuestion].reponseC != null &&
                    <label className="form-control" id={"label" + indexOfQuestion + "C"}>
                        <input type="radio" name={"quizzQ" + indexOfQuestion} value="reponseC" />
                        {quizz[indexOfQuestion].reponseC}
                    </label>
                }

                {quizz[indexOfQuestion].reponseD != null &&
                    <label className="form-control" id={"label" + indexOfQuestion + "D"}>
                        <input type="radio" name={"quizzQ" + indexOfQuestion} value="reponseD" />
                        {quizz[indexOfQuestion].reponseD}
                    </label>
                }
                <div style={{ textAlign: "right" }}>
                    <button className="btn btn-light"
                        onClick={() => {
                            getResults()
                        }}
                    >Terminer</button>
                    <button className="btn btn-light"
                        onClick={() => {
                            next()
                        }}
                    >Next</button>
                </div>

            </div>
        </div>
    );
}

export default EducationTemplate4;