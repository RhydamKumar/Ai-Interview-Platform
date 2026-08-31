import "../assets/StartInterview.css"
import React, { useState } from 'react'
import { generateQuestionsAPI, StartInterviewAPI } from "../services/Interview";

const ALLOWED_FILE = ["application/pdf"];
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const Start_Interview = ({onClick}) => {

  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e) =>{

    try{

      const file = e.target.files[0];

    if (!file){
      return;
    }

    if (!ALLOWED_FILE.includes(file.type)){
      setError("Only PDF allowed");
      return;
    }

    if (file.size > MAX_FILE_SIZE){
      setError("File size must be 5mb.");
      return;
    }

    setError("");
    setResume(file);

    } catch(error){
      console.error("Error", error)
    }
    
  }


  const handleFormSubmit = async (e) =>{
    e.preventDefault();

    if(!jobTitle || !jobDescription || !resume) {
      setError("All feilds required!!! ");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formdata = new FormData();
      formdata.append("job_title", jobTitle);
      formdata.append("job_description", jobDescription);
      formdata.append("resume", resume);


      const response = await generateQuestionsAPI(formdata);

      const data = await StartInterviewAPI(response.session_id);

      onClick(data,response.session_id);
      
    } catch (error) {
      console.error("Error",error)
    } finally {
      setLoading(false)
    }
  }



  return (
    <div className="start-interview-container">
      <form className="start-interview-form" onSubmit={handleFormSubmit}>
        <h1>Ai Interview</h1>

        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label >Job Title</label>
          <input 
          type="text"
          placeholder="Enter Job Title"
          required 
          value={jobTitle}
          onChange={e => setJobTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label >Job Description</label>
          <input 
          type="text"
          placeholder="Enter Job Title"
          required 
          value={jobDescription}
          onChange={e => setJobDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label >Resume (PDF)</label>
          <input 
          type="file"
          accept=".pdf"
          required 
          onChange={handleFileUpload}
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading} > 
          {loading ? "Generating Questions" : "Start Interview"} </button>



      </form>
    </div>
  )
}

export default Start_Interview
