function displayImagePreview(event) {
    const imagePreview = document.getElementById("imagePreview");
    const uploadedImage = document.getElementById("uploadedImage");
    
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            imagePreview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
}

document.getElementById("image").addEventListener("change", displayImagePreview);

function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let weight = document.getElementById("weight").value;
    let education = document.getElementById("education").value;
    let marital = document.getElementById("marital").value;
    let nationality = document.getElementById("nationality").value;
    let bloodGroup = document.getElementById("bloodGroup").value;
    let occupation = document.getElementById("occupation").value;
    let otherOccupation = document.getElementById("otherOccupation").value;
    let hobbies = document.getElementById("hobbies").value;

    // If "Other" occupation is selected, use the input value instead
    if (occupation === "Other") {
        occupation = otherOccupation ? otherOccupation : "Other (Not Specified)";
    }

    if (!name || !email || !phone || !address || !dob || !gender || !weight || !education || !marital || !nationality || !bloodGroup || !occupation || !hobbies) {
        alert("Please fill in all fields!");
        return;
    }

    // Get uploaded image
    const uploadedImageSrc = document.getElementById("uploadedImage").src;

    // Display biodata information and uploaded image
    document.getElementById("output").innerHTML = `
        <h3>Biodata Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Weight:</strong> ${weight} kg</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Marital Status:</strong> ${marital}</p>
        <p><strong>Nationality:</strong> ${nationality}</p>
        <p><strong>Blood Group:</strong> ${bloodGroup}</p>
        <p><strong>Occupation:</strong> ${occupation}</p>
        <p><strong>Hobbies:</strong> ${hobbies}</p>
        <p><strong>Uploaded Image:</strong></p>
        <img src="${uploadedImageSrc}" alt="Uploaded Image" style="max-width: 200px; max-height: 200px;">
    `;

    // Clear form fields after submission
    document.getElementById("biodataForm").reset();
    document.getElementById("otherOccupationField").style.display = "none"; // Hide other field after submission
    document.getElementById("imagePreview").style.display = "none"; // Hide image preview after submission
}
