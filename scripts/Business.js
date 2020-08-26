export const businessEntry = (entry) => {
    return `
        <section>
            <h2>${entry.companyName}</h2>
            <p>${entry.addressFullStreet}</p>
            <p>${entry.addressCity}, ${entry.addressStateCode} ${entry.addressZipCode}</p>
        </section>
    `
}