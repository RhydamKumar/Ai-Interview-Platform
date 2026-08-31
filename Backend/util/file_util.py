import PyPDF2
from fastapi import HTTPException, UploadFile,status
import io

MAX_FILE_SIZE = 5 * 1024 * 1024


async def validate_file(resume:UploadFile):

    resume.file.seek(0,2)
    size = resume.file.tell()
    resume.file.seek(0)

    if size > MAX_FILE_SIZE:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="File size should not Exceed 5 MB")

    file_format = [
        "application/pdf"
    ]

    if resume.content_type not in file_format:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="We suppot PDF file only")


async def extract_text(resume:UploadFile):
    content = await resume.read()

    if resume.content_type == "application/pdf":
         reader = PyPDF2.PdfReader(io.BytesIO(content))
         return " ".join(page.extract_text() or "" for page in reader.pages)

    return ""