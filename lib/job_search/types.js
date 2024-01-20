/** @enum {string} */
let EventType = {
  Applied: "Applied",
  RejectedByMe: "Rejected By Me",
  RecruiterInterview: "Recruiter Interview",
  TechnicalInterview: "Technical Interview",
  TechnicalInterview2: "2nd Technical",
  // Non-whiteboarding engineering interview
  ManagerInterview: "Manager Interview",
  VirtualOnsiteInterview: "Onsite Interview",
  Rejected: "Rejected",
  Offer: "Offer",
};

/**
 * @typedef {{
 *   job: string,
 *   date?: Date,
 *   eventType: !EventType,
 * }}
 */
let JobSearchEvent;

/**
 * @typedef {{
 *   job:string,
 *   jobSearchEvents: !Array<JobSearchEvent>,
 * }}
 */
let JobData;

module.exports = { EventType, JobSearchEvent, JobData };
