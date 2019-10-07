export interface WorkRequest {
    _id: String,
    requestor: String,
    id: String,
    chargecode: Number,
    companypsl: String,
    description: String,
    driver: String,
    duration: String,
    group: String,
    priority: String,
    pslparticipation: Boolean,
    requestcomments: String,
    resource: String,
    tasks: Array<String>,
    testcontact: String,
    testdescription: String,
    testlocation: String,
    tool: String,
    createdAt: Date,
    status: String
}
