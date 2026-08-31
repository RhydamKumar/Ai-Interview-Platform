import { useEffect, useRef, useState } from "react"

export const UseSpeechToText = (onSilence)=>{
    const recognitionRef = useRef("");
    const silenceTimeRef = useRef("");
    const onSilenceRef = useRef(onSilence);
    const transcriptRef = useRef("");
    const [transcript, setTranscript] = useState("")

    useEffect(()=>{
        onSilenceRef.current = onSilence;
    }, [onSilence]);

    useEffect(() =>{
        transcriptRef.current = transcript;
    },[transcript]);

    const startListening = ()=>{
        setTranscript("");
        transcriptRef.current = "";


        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.error("SpeechRecognition is not Supported");
            return;
        }


        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.lang = "en-US"
        recognition.interimResults = true;

        recognition.onresult =(event)=>{
            let finaltext = ""
            let interimText = "";
        
            


            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                const transcript = result[0].transcript;

                if (result.isFinal) {
              finaltext += transcript;
                } else {
                  interimText += transcript;
                }
            }

            if (finaltext) {
            setTranscript(prev => {
            const updated = (prev + " " + finaltext).trim();
            transcriptRef.current = updated;
            return updated;
                });
            }

            if (finaltext || interimText){
                resetSilenceTimer()
            }
        }

        recognition.onerror = (error) => {
            console.error("SpeechRecognition error",error)
        };

        recognition.start();
        recognitionRef.current = recognition
    }

    const resetSilenceTimer = () =>{
        
        clearTimeout(silenceTimeRef.current);

        silenceTimeRef.current = setTimeout(()=>{
             const text = transcriptRef.current.trim();

             if (text){
                recognitionRef.current?.stop();
                recognitionRef.current = null;
                onSilenceRef.current(text);
             }
        },3000);
    }

    const resetTranscript = () => {
    setTranscript("");
    transcriptRef.current = "";
    clearTimeout(silenceTimeRef.current);
    };


    const stopListening = ()=>{
    recognitionRef.current?.stop();
    recognitionRef.current = null;
    clearTimeout(silenceTimeRef.current);
    };

   return {
    stopListening,
    resetSilenceTimer,
    startListening,
    resetTranscript,
};

}