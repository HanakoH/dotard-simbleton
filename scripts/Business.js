export const businessEntry = (entry) => {
    return `
        <section class="entry">
            <h2 class="companyName">${entry.companyName}</h2>
            <p class="streetAddress">${entry.addressFullStreet}</p>
            <p class="restAddress">${entry.addressCity}, ${entry.addressStateCode} ${entry.addressZipCode}</p>
        </section>
    `
}
