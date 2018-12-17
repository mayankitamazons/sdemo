var mongoose = require('mongoose');

var RegisterSchema = new mongoose.Schema({
    teamname: {index: false, type: String, sparse: true},
    paasword: {index: false, type: String, sparse: true},
    email: {index: false, type: String, sparse: true},
    teacher_f_name: {index: false, type: String, sparse: true},
    teacher_last_name: {index: false, type: String, sparse: true},
    teacher_email: {index: false, type: String, sparse: true},
    teacher_sname: {index: false, type: String, sparse: true},
    s_name1: {index: false, type: String, sparse: true},
    s_name2: {index: false, type: String, sparse: true},
    s_name3: {index: false, type: String, sparse: true},
    s_class: {index: false, type: String, sparse: true},
    project_title: {index: false, type: String, sparse: true},
    category: {index: false, type: String, sparse: true},
    school_name: {index: false, type: String, sparse: true},
    school_phone: {index: false, type: String, sparse: true},
    s1_tshirt: {index: false, type: String, sparse: true},
    s2_tshirt: {index: false, type: String, sparse: true},
    s3_tshirt: {index: false, type: String, sparse: true},
	summary: {index: false, type: String, sparse: true},
	summary_doc: {index: false, type: String, sparse: true},
	form_doc: {index: false, type: String, sparse: true},
  
}, {timestamps: true});

mongoose.model('Register', RegisterSchema);
