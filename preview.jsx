import { useSelector,connect } from "react-redux";
import "./css/preview.css";

let Preview = (props) => {
  

  let { fname, lname, city, state, email, contactdetails,summary,pincode, cgpa, college, degree, year ,skill1,skill2,skill3,skill4,skill5,skill6,skill7,skill8,experienceduration,jobprofile,joblocation,jobdetail1,jobdetail2,jobdetail3,jobdetail4,} =
    useSelector((state) => {
        console.log(state)
        return state.details}) || {};

  let templateCode = useSelector((state) => state.template);
  console.log("hei==",templateCode);

  
    let firstLetter = fname.charAt(0);
    let lastLetter = lname.charAt(0);
    let boxletter = firstLetter+lastLetter;
  

  return (
    
      <div className="preview-container">
        <h3 className="m-4">PERSONAL & PROFESSIONAL  SUMMARY</h3>
        <div className={'divider'}></div>

        <div className="resumeContainer">
          <div className={`header-${templateCode}`}>
            <div className={`profile-${templateCode}`}>{boxletter}</div>
            
            <div className="nameContainer">
              <div className={`cvName-${templateCode}`}>{fname}{" "}{lname}</div>
            < div className={`personalDetails-${templateCode}`}>
              <div className={`detail-${templateCode}`}>{email}</div>
              <div className={`detail-${templateCode}`}>{contactdetails}</div>
              <div className={`detail-${templateCode}`}>{state}</div>
              <div className={`detail-${templateCode}`}>{city}</div>
              <div className={`detail-${templateCode}`}>{pincode}</div>
            </div>

            </div>
          </div>

          <div className="main">
            <div className="row1">
                  <div className={`summary-${templateCode}`}>
                    <div className={`textSummary-${templateCode}`}>Professional Summary</div>
                    <p classname={`summaryParagrapgh-${templateCode}`}>{summary}</p>
                  </div>
            </div>

            <div className="row2">
              <div className={`education-${templateCode}`}>
                <div className={`college-${templateCode}`}>Education</div>
                <div className={`clgDetails-${templateCode}`}>
                  <p className={`collegeDetails-${templateCode}`}>{college}</p>
                  <p className={`collegeDetails-${templateCode}`}>{degree}</p>
                  <p className={`collegeDetail-${templateCode}`}>{cgpa}</p>
                  <p className={`collegeDetail-${templateCode}`}>{year}</p>
                </div>
              </div>
            </div>

            <div className="row3">
              <div className={`skillWrapper-${templateCode}`}>

              <div className={`skills-${templateCode}`}>Skills</div>
              <div className={`skillContainer-${templateCode}`}>
                  <div className="skillRow">
                      <p>{skill1}</p>
                      <p>{skill2}</p>
                      <p>{skill3}</p>
                      <p>{skill4}</p>
                  </div>
                <div className="skillRow">
                      <p>{skill5}</p>
                      <p>{skill6}</p>
                      <p>{skill7}</p>
                      <p>{skill8}</p>
                </div>
              </div>
              </div>
            </div>

            <div className="row4">
              <div className={`experienceContainer-${templateCode}`}>
                <div className={`experienceText-${templateCode}`}>Experience</div>
                <div className={`experienceDetails-${templateCode}`}>
                  <div className={`bold-${templateCode}`}>{experienceduration}</div>
                  <div className={`bold-${templateCode}`}>{jobprofile}</div>
                  <div className={`bold-${templateCode}`}>{joblocation}</div>
                  <br />
                  <ul className="list">
                    <li>{jobdetail1}</li>
                    <li>{jobdetail2}</li>
                    <li>{jobdetail3}</li>
                    <li>{jobdetail4}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

  );
};
export default (Preview);