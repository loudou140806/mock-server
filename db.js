//db.js
var Mock = require('../static/mock')
var treeMap = require('./db/treeMap')
var combine = require('./db/combine')
var growthOfUnit = require('./db/growthOfUnit')
var pointToPoint = require('./db/pointToPoint')
var contributionToReturn = require('./db/ctr')
var pbc = require('./db/pbc')
var apo = require('./db/apo')
var managerFee = require('./db/managerFee')
var flowByClassification = require('./db/flowByClassification')
var contributionToReturnNew = require('./db/ctrnew')
var countryAnalysis = require('./db/countryAnalysis')
var dataFormat = require('./db/dataFormat')


module.exports = {
    treeMap,
    combine,
    growthOfUnit,
    pointToPoint,
    contributionToReturn,
    contributionToReturnNew,
    pbc,
    apo,
    managerFee,
    flowByClassification,
    countryAnalysis,
    dataFormat
};
