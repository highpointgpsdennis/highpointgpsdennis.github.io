const baseURL = "https://trackerserver.webredirect.org";

async function login(loginInfo, cb) {
    const response = await fetch(baseURL + "/sharedlogin", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, { company: data.company, installerEmail: data.installerEmail, userEmail: data.userEmail, userFname: data.userFname, userLname: data.userLname, installerCompany: data.installerCompany, isInstaller: data.isInstaller }))

}

async function loginAdmin(loginInfo, cb) {
    const response = await fetch(baseURL + "/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, { company: data.company, installerEmail: data.installerEmail, userEmail: data.userEmail, userFname: data.userFname, userLname: data.userLname, installerCompany: data.installerCompany, isInstaller: data.isInstaller }))

}

async function companyList(cb) {
    const response = await fetch(baseURL + "/companyList", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => { cb(true, data) })
}

async function userList(companyName, cb) {
    let url = new URL(baseURL + "/userList"),
        params = { companyName }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => { cb(true, data) })
}

async function adminUserList(companyName, installerEmail, cb) {
    let url = new URL(baseURL + "/userList"),
        params = { companyName, installerEmail }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => { cb(true, data) })
}

async function groupList(companyName, cb) {
    let url = new URL(baseURL + "/groupList"),
        params = { companyName }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => { cb(true, data) })
}

async function adminGroupList(companyName, installerEmail, cb) {
    let url = new URL(baseURL + "/groupList"),
        params = { companyName, installerEmail }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => { cb(true, data) })
}

async function trackerList(companyName, cb) {
    let url = new URL(baseURL + "/deviceList"),
        params = { companyName }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => { cb(true, data) })
}

async function adminTrackerList(companyName, installerEmail, cb) {
    let url = new URL(baseURL + "/deviceList"),
        params = { companyName, installerEmail }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => { cb(true, data) })
}

async function setUserGroups(groups, email, companyName, cb) {
    const response = await fetch(baseURL + "/setUserGroups", {
        method: "POST",
        body: JSON.stringify({ groupsToSet: groups, email, companyName }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function adminSetUserGroups(installerEmail, groups, email, companyName, cb) {
    const response = await fetch(baseURL + "/setUserGroups", {
        method: "POST",
        body: JSON.stringify({ installerEmail, groupsToSet: groups, email, companyName }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}


async function setNewGroups(groups, companyName, cb) {
    const response = await fetch(baseURL + "/groupList", {
        method: "POST",
        body: JSON.stringify({ groupsToSet: groups, companyName }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function adminSetNewGroups(groups, installerEmail, companyName, cb) {
    const response = await fetch(baseURL + "/groupList", {
        method: "POST",
        body: JSON.stringify({ groupsToSet: groups, companyName, installerEmail }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function addCompany(companyName, address, phoneNumber, cb) {
    const response = await fetch(baseURL + "/company", {
        method: "POST",
        body: JSON.stringify({ companyName, address, phoneNumber }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function adminAddCompany(installerEmail, companyName, address, phoneNumber, cb) {
    const response = await fetch(baseURL + "/company", {
        method: "POST",
        body: JSON.stringify({ installerEmail, companyName, address, phoneNumber }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}


async function addUser(firstName, lastName, email, password, companyName, cb) {
    const response = await fetch(baseURL + "/user", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, email, password, companyName }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function adminAddUser(installerEmail, firstName, lastName, email, password, companyName, cb) {
    const response = await fetch(baseURL + "/user", {
        method: "POST",
        body: JSON.stringify({ installerEmail, firstName, lastName, email, password, companyName }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function addTracker(companyName, groupName, deviceImei, deviceName, cb) {
    const response = await fetch(baseURL + "/device", {
        method: "POST",
        body: JSON.stringify({ groupName, companyName, deviceImei, deviceName }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function adminAddTracker(installerEmail, companyName, groupName, deviceImei, deviceName, assetType, color, vin, year, licensePlate, cb) {
    const response = await fetch(baseURL + "/device", {
        method: "POST",
        body: JSON.stringify({ groupName, companyName, deviceImei, deviceName, installerEmail, assetType, color, vin, year, licensePlate }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function deleteUser(email, companyName, cb) {
    const response = await fetch(baseURL + "/user", {
        method: "DELETE",
        body: JSON.stringify({ email, companyName }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Deleted."))

}

async function adminDeleteUser(installerEmail, email, companyName, cb) {
    const response = await fetch(baseURL + "/user", {
        method: "DELETE",
        body: JSON.stringify({ email, companyName, installerEmail }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Deleted."))

}

async function deleteCompany(companyName, address, phoneNumber, cb) {
    const response = await fetch(baseURL + "/company", {
        method: "DELETE",
        body: JSON.stringify({ companyName, address, phoneNumber }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Deleted."))

}

async function adminDeleteCompany(installerEmail, companyName, address, phoneNumber, cb) {
    const response = await fetch(baseURL + "/company", {
        method: "DELETE",
        body: JSON.stringify({ installerEmail, companyName, address, phoneNumber }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Deleted."))

}

async function deleteTracker(deviceInfo, cb) {
    const response = await fetch(baseURL + "/device", {
        method: "DELETE",
        body: JSON.stringify(deviceInfo),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Deleted."))

}

async function editCompany(companyName, address, phoneNumber, companyNameUpdate, addressUpdate, phoneNumberUpdate, cb) {
    const response = await fetch(baseURL + "/company", {
        method: "PUT",
        body: JSON.stringify({
            companyName,
            address,
            phoneNumber,
            companyNameUpdate,
            addressUpdate,
            phoneNumberUpdate
        }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}


async function moveDeviceToDiffCompany(device, cb) {
    const response = await fetch(baseURL + "/movedevice", {
        method: "PUT",
        body: JSON.stringify(device),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function adminEditCompany(installerEmail, companyName, address, phoneNumber, companyNameUpdate, addressUpdate, phoneNumberUpdate, cb) {
    const response = await fetch(baseURL + "/company", {
        method: "PUT",
        body: JSON.stringify({
            companyName,
            address,
            phoneNumber,
            companyNameUpdate,
            addressUpdate,
            phoneNumberUpdate,
            installerEmail
        }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function editUser(updatedUser, cb) {
    const response = await fetch(baseURL + "/user", {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function editTracker(updatedTracker, cb) {
    const response = await fetch(baseURL + "/device", {
        method: "PUT",
        body: JSON.stringify(updatedTracker),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function logout(cb) {
    const response = await fetch(baseURL + "/logout", {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Logged out."))

}

async function reverseGeocoding(lat, long, cb) {
    //https://nominatim.openstreetmap.org/reverse?lat=45.644418&lon=-73.494418
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, "Reverse geocoding error.") })
        return;
    }
    response.json().then(data => { cb(true, data) })
}

async function addLogo(img, cb) {
    const response = await fetch(baseURL + "/installerLogo", {
        method: "POST",
        body: JSON.stringify({ logo: img }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || data.errors[0].param) })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function addLogoAdmin(installerEmail, img, cb) {
    const response = await fetch(baseURL + "/installerLogo", {
        method: "POST",
        body: JSON.stringify({ logo: img, installerEmail }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || data.errors[0].param) })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function getLogo(cb) {
    const response = await fetch(baseURL + "/installerLogo", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || data.errors[0].param) })
        return;
    }
    response.json().then(data => cb(true, data))
}

async function getLogoAdmin(installerEmail, cb) {
    let url = new URL(baseURL + "/installerLogo"),
        params = { installerEmail }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => { cb(true, data) })
}

async function adminCompanyList(installerEmail, cb) {
    let url = new URL(baseURL + "/companyList"),
        params = { installerEmail }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => { cb(true, data) })
}

async function loginAsUser(loginInfo, cb) {
    const response = await fetch(baseURL + "/loginasuser", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, { company: data.company, installerEmail: data.installerEmail, userEmail: data.userEmail, userFname: data.userFname, userLname: data.userLname, installerCompany: data.installerCompany, isInstaller: data.isInstaller }))

}

async function getInstallerList(cb) {
    const response = await fetch(baseURL + "/installerList", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => { cb(true, data) })
}

async function createInstaller(installerInfo, cb) {
    const response = await fetch(baseURL + "/installer", {
        method: "POST",
        body: JSON.stringify(installerInfo),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, data))

}

async function adminEditInstaller(updatedInstaller, cb) {
    const response = await fetch(baseURL + "/installer", {
        method: "PUT",
        body: JSON.stringify(updatedInstaller),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function killswitchTracker(trackerInfo, cb) {
    const response = await fetch(baseURL + "/stopcommand", {
        method: "POST",
        body: JSON.stringify(trackerInfo),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, data))

}


async function disableKillswitchTracker(trackerInfo, cb) {
    const response = await fetch(baseURL + "/startcommand", {
        method: "POST",
        body: JSON.stringify(trackerInfo),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, data))

}

async function resetPasswordRequest(email, cb) {
    const response = await fetch(baseURL + "/resetpasswordrequest", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}

async function resetPassword(token, password, cb) {
    const response = await fetch(baseURL + "/resetpassword", {
        method: "POST",
        body: JSON.stringify({ token, password }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })

    if (!response.ok) {
        response.json().then(data => { cb(false, data.error || "Your " + data.errors[0].param + " is invalid.") })
        return;
    }
    response.json().then(data => cb(true, "Saved."))

}
