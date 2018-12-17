var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    category: {index: false, type: String, sparse: true},
    email: {index: false, type: String, sparse: true},
    f_name: {index: false, type: String, sparse: true},
    grade: {index: false, type: String, sparse: true},
    l_name: {index: false, type: String, sparse: true},
    p_cert: {index: false, type: Boolean, sparse: true},
    password: {index: false, type: String, sparse: true},
    s_name1: {index: false, type: String, sparse: true},
    s_name2: {index: false, type: String, sparse: true},
    savedToCloud: {index: false, type: Boolean, sparse: true},
    sc_name1: {index: false, type: String, sparse: true},
    sc_name2: {index: false, type: String, sparse: true},
    summary: {index: false, type: String, sparse: true},
    t_cert: {index: false, type: Boolean, sparse: true},
    t_email: {index: false, type: String, sparse: true},
    teamname: {index: false, type: String, sparse: true},
    title: {index: false, type: String, sparse: true}
}, {timestamps: true});

mongoose.model('User', UserSchema);
