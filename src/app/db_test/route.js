"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function AddOrganisation(_a) {
    var name = _a.name, email = _a.email, password = _a.password, mobileNumber = _a.mobileNumber;
    return __awaiter(this, void 0, void 0, function () {
        var user, createUser, organisation;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    user = {
                        email: email,
                        hashPassword: password
                    };
                    return [4 /*yield*/, prisma.user.create({ data: user })];
                case 1:
                    createUser = _b.sent();
                    organisation = {
                        name: name,
                        mobileNumber: mobileNumber,
                        user: {
                            connect: createUser
                        }
                    };
                    return [4 /*yield*/, prisma.organisation.create({ data: organisation })];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function AddVolunteer(_a) {
    var name = _a.name, email = _a.email, password = _a.password, bday = _a.bday, mobileNumber = _a.mobileNumber, availability = _a.availability;
    return __awaiter(this, void 0, void 0, function () {
        var user, createUser, volunteer;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    user = {
                        email: email,
                        hashPassword: password
                    };
                    return [4 /*yield*/, prisma.user.create({ data: user })];
                case 1:
                    createUser = _b.sent();
                    volunteer = {
                        name: name,
                        mobileNumber: mobileNumber,
                        bday: bday,
                        availability: availability,
                        user: {
                            connect: createUser
                        }
                    };
                    return [4 /*yield*/, prisma.volunteer.create({ data: volunteer })];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function RetrieveUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var users, _i, users_1, o, s;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.user.findMany({
                        include: {
                            volunteer: true,
                            organisation: true,
                            admin: true
                        }
                    })];
                case 1:
                    users = _a.sent();
                    for (_i = 0, users_1 = users; _i < users_1.length; _i++) {
                        o = users_1[_i];
                        s = o.id + "|";
                        if (o.volunteer != null)
                            s += "Volunteer |" + o.volunteer.name;
                        if (o.organisation != null)
                            s += "Organisation |" + o.organisation.name;
                        if (o.admin != null)
                            s += "Admin |" + o.admin.name;
                        s += "|" + o.email + "|" + o.hashPassword;
                        console.log(s);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// AddOrganisation({
//     name: "My Company",
//     email: "my@mail.com",
//     password: "my",
//     mobileNumber: "11111111"
// });
// AddVolunteer({
//     name: "Sush1",
//     email: "sushi@mail.com",
//     password: "sushi",
//     mobileNumber: "11111111",
//     availability: Availability.WEEKEND,
//     bday: new Date("2003-01-01")
// });
RetrieveUsers();
