import { useEffect, useState } from "react"
import { APP_CONSTANT } from "../util/constant";
import Start_Interview from "../components/Start_Interview";
import {StartInterviewAPI, endInterviewAPI, reportAPI, submitAPI } from "../services/Interview";
import { playAudio } from "../util/audio";
import Interview from "../components/Interview";
import { UseSpeechToText } from "../Hooks/UseSpeechToText.jsx";
import Report from "../components/Report.jsx";
import "../assets/InterviewPage.css"

const InterviewPage = () => {

  const [sessionId, setSessionId] = useState(null);
  const [status, setStatus] = useState(APP_CONSTANT.IDLE);
  const [question, setQuestion] = useState("");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const onAutoSubmit = async (finalText)=>{
    stopListening();

    if(!finalText.trim()){
      return;
    }

    const payload = {
      "session_id" : sessionId,
      "answer" :finalText,
      "skip": false
    }
    const data = await submitAPI(payload);

    if (!data) {
        console.error("No data returned from submitAPI");
        return;
      }

    if (data.interviewEnded){
      //report generate
      await finsihInterview();
    }
    else{
      //Ask Question
      setQuestion(data.nextQuestion);
      setStatus(APP_CONSTANT.ASKING);
    }
  }
  const {startListening, stopListening, resetTranscript} = UseSpeechToText(onAutoSubmit);

  

  const finsihInterview = async ()=>{
    setLoading(true)
    setStatus(APP_CONSTANT.COMPLETED);
    const data = await reportAPI(sessionId);

    if(!data){
      return;
    }
    setReport(data.result);
    setLoading(false)
  }

  const endInterview = async ()=>{
    // ToDo End Interview
    stopListening();

    //call end endpoint
    await endInterviewAPI(sessionId);
    await finsihInterview();
  }
  
  const skipQuestion = async()=>{
    // ToDo Skip Question
    stopListening();

    console.log("Session ID before submit:", sessionId);
    console.log("sessionId before submit:", sessionId);

    const payload = {
      "session_id" : sessionId,
      "answer" :"",
      "skip": true
    }
    const data = await submitAPI(payload);

    if (data.interviewEnded){
      //report generate
      await finsihInterview();
    }
    else{
      //Ask Question
      setQuestion(data.nextQuestion);
      setStatus(APP_CONSTANT.ASKING);
    }
  }

  useEffect(()=> {
    if (status == APP_CONSTANT.ASKING) {
    playAudio(question, ()=> {
    resetTranscript();
    setStatus(APP_CONSTANT.LISTENING);

        startListening();
      });
    }
  },[status,question]);



  const StartInterview = async (data , session_id)=> {
    setLoading(true)
    
    if (!data){
      console.error("Something went wrong");
      return;
    }

    setSessionId(session_id);
    setQuestion(data.FirstQuestion);

    setStatus(APP_CONSTANT.INTRO)
    
    const Introtext = data.Introtext;
    playAudio(Introtext, ()=> {
      setLoading(false)
      setStatus(APP_CONSTANT.ASKING)
    });
  }

  return(
    <div>
      {loading && <div className="loader"></div>}

      {status == APP_CONSTANT.IDLE && (<Start_Interview onClick={StartInterview} />) }

      {(status == APP_CONSTANT.ASKING || status==APP_CONSTANT.LISTENING) && (<Interview skipQuestion = {skipQuestion} endInterview={endInterview} state = {status}/>)}
      
      {status== APP_CONSTANT.COMPLETED && <Report report={report}/>}
      
      
    </div>
  )
}

export default InterviewPage
