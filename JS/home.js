let addressBookList;
window.addEventListener('DOMContentLoaded', (event) => {
    addressBookList = getAddressBookDataFromStorage();
    createInnerHtml();
});

const getAddressBookDataFromStorage = () => {
    return localStorage.getItem('AddressBookList') ?
                        JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHtml = () => {
    const headerHtml = "<th>Full Name</th><th>Address</th><th>City</th><th>State</th>" +
                       "<th>ZipCode</th><th>PhoneNo</th><th></th>";
    let innerHtml = `${headerHtml}`;
    if(addressBookList.length == 0) return;
    for (const addressBookData of addressBookList) {
        innerHtml = `${innerHtml}
     <tr>
     <td>${addressBookData._name}</td>
     <td>${addressBookData._address}</td>
     <td>${addressBookData._city}</td>
     <td>${addressBookData._state}</td>
     <td>${addressBookData._zipCode}</td>
     <td>${addressBookData._phoneNo}</td>
     <td>
     <img id="${addressBookData._id}" onclick="remove(this)" alt="delete"
     src="../Assets/delete-black-18dp.svg" height = "25">
     <img id="${addressBookData._id}" alt="edit" onclick="update(this)"
     src="../Assets/outline_edit_black_24dp.png">
     </td>
     </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}