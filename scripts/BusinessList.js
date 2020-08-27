import { businessEntry, agentEntry } from "./Business.js"
import { businessCopy, businessCopyNY, businessCopyManufacturing, listingAgents } from "./BusinessProvider.js"

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

export const agentList = () => {
    let contentElementIII = document.querySelector(".agents")
    let agentArray = listingAgents

    contentElementIII.innerHTML = "<h2>Purchasing Agents</h2>"

    agentArray.forEach(
        (agent) => {
            contentElementIII.innerHTML += agentEntry(agent)
        }
    );
}

// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */
            const copyBusiness = businessCopy()

            const foundBusiness = copyBusiness.find(business=>{
                return (business.companyName
                    .toLowerCase()
                    .includes(keyPressEvent.target.value))
            })
            // implement .find() method here

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });

const agentSearchResultArticle = document.querySelector(".foundAgents")

document
    .querySelector("#agentSearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
                /*
                    When user presses enter, find the matching business.
                    You can use the `.includes()` method strings to
                    see if a smaller string is part of a larger string.
    
                    Example:
                        business.companyName.includes(keyPressEvent.target.value)
                */
        const foundAgent = listingAgents.find(agent=>{
        return (agent.fullName
            .toLowerCase()
            .includes(keyPressEvent.target.value))
        })
                // implement .find() method here
    
        agentSearchResultArticle.innerHTML = `
            <h2>
                ${foundAgent.fullName}
            </h2>
            <section>
                ${foundAgent.companyName}
            </section>
            <section>
                ${foundAgent.phoneNumber},
            </section>
                `;
        }
});