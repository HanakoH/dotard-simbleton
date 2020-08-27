export const businessEntry = (entry) => {
    return `
        <section class="entry">
            <h2 class="companyName">${entry.companyName}</h2>
            <p class="streetAddress">${entry.addressFullStreet}</p>
            <p class="restAddress">${entry.addressCity}, ${entry.addressStateCode} ${entry.addressZipCode}</p>
        </section>
    `
}

export const agentEntry = (entry) => {
    return `
        <section class="entry">
            <h2 class="agentName">${entry.fullName}</h2>
            <p class="agentCompany">${entry.companyName}</p>
            <p class="agentPhone">${entry.phoneNumber}</p>
        </section>
    `
}
