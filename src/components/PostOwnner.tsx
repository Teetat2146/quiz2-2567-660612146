"use client";

export default function PostOwnner(props:any) {
  return  <div className="vstack gap-3">
  <div className="d-flex align-items-center gap-3">
    <img
      src="/profileImages/Student.jpg"
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />
    <span className="fw-semibold fs-5">{props.name} {props.studentId}</span>
  </div>

  <span>{props.textPost}</span>

  <div className="d-flex align-items-center gap-1">
    <img src="/like.svg" width={20}></img>
    <span className="text-muted">100 คน</span>
  </div>
  <hr className="m-0 border" />
</div>
}
