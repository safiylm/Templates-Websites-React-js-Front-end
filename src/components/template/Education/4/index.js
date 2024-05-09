import '../../../../styles/Education/template4.scss';
import 'bootstrap/dist/css/bootstrap.css';

function EducationTemplate4() {
    let indexOfQuestion = 0;
    const quizz = [
        {
            "question": "Google (www.google.com) is a : ",
            "reponseA": "Number in math",
            "reponseB": "Search engine",
            "reponseC": "Directory of images",
            "reponseD": "Chat service on web",
            "temps": 10,
        },
        {
            "question": "",
            "reponseA": "",
            "reponseB": "",
            "reponseC": "",
            "reponseD": "",
            "temps": "",
        }
        ,
        {
            "question": "",
            "reponseA": "",
            "reponseB": "",
            "reponseC": "",
            "reponseD": "",
            "temps": "",
        }
    ]
    return (
        <div className="div-quizz-body d-flex justify-content-center align-items-center">

            <div className="div-quizz-container">

                <div className="d-flex justify-content-between align-items-center"
                    style={{ padding: "15px 0", borderBottom: "2px solid #8c34e7" }}>
                    <div> 1 of {quizz.length} questions </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-stopwatch" viewBox="0 0 16 16">
                            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                            <path
                                d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
                        </svg>
                        <div id="remaining-time"> { quizz[indexOfQuestion].temps }s</div>
                    </div>
                </div>


                <p id="quiz-question">Google (www.google.com) is a : </p>


                <label className="form-control">
                    <input type="radio" name="quizzQ1" />
                    { quizz[indexOfQuestion].reponseA }
                </label>

                <label className="form-control">
                    <input type="radio" name="quizzQ1" />
                    { quizz[indexOfQuestion].reponseB }
                </label>

                <label className="form-control">
                    <input type="radio" name="quizzQ1" />
                    { quizz[indexOfQuestion].reponseC }
                </label>

                <label className="form-control">
                    <input type="radio" name="quizzQ1" />
                    { quizz[indexOfQuestion].reponseD }
                </label>
                <div style={{ textAlign: "right" }}>
                    <button className="btn btn-light" 
                    // onClick={()=>{
                    //     indexOfQuestion = indexOfQuestion+1
                    // }}
                    >Next</button>

                </div>

            </div>
        </div>
    );
}

export default EducationTemplate4;