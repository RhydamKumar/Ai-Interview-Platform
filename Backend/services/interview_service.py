import uuid
from models.interview import Answer, InterviewEnumStatus, Interviewsession
from store.session_store import SESSION_STORE


def create_session() ->Interviewsession:
    session_id = str(uuid.uuid4())

    interview_session = Interviewsession(
        session_id=session_id
    )

    SESSION_STORE[session_id] = interview_session

    print("CREATED SESSION:", session_id)
    print("STORE:", SESSION_STORE)

    return interview_session

def get_session(session_id:str) -> Interviewsession:

    print("LOOKING FOR SESSION:", session_id)
    print("CURRENT STORE:", SESSION_STORE)

    session = SESSION_STORE.get(session_id)

    if not session:
        return None

    return session

def save_answer(answer:str | None, skip : bool, session: Interviewsession ):
    question = session .questions[session.current_index]

    session.answers.append(
        Answer(
            question = question,
            answer = None if skip else answer,
            skip = skip
        )
    )

    session.current_index += 1

    if session.current_index == len (session.questions):
        session.status = InterviewEnumStatus.COMPLETED