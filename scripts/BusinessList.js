import { businessEntry } from "./Business.js"
import { businessCopy, businessCopyManufacturing } from "./BusinessProvider.js"
import { businessCopyNY } from "./BusinessProvider.js"

export const businessList = () => {
    let contentElement = document.querySelector(".businessList")
    let businessArray = businessCopy()

    contentElement.innerHTML = "<h2>Active Businesses</h2>"

    businessArray.forEach(
        (business) => {
            contentElement.innerHTML += businessEntry(business)
        }
    );
}

export const businessListNY = () => {
    let contentElementI = document.querySelector(".businessList--newYork")
    let businessArrayI = businessCopyNY

    contentElementI.innerHTML = "<h2>New York Businesses</h2>"

    businessArrayI.forEach(
        (business) => {
            contentElementI.innerHTML += businessEntry(business)
        }
    );
}

export const businessListManufacturing = () => {
    let contentElementII = document.querySelector(".businessList--manufacturing")
    let businessArrayII = businessCopyManufacturing

    contentElementII.innerHTML = "<h2>Manufacturing Businesses</h2>"

    businessArrayII.forEach(
        (business) => {
            contentElementII.innerHTML += businessEntry(business)
        }
    );
}

