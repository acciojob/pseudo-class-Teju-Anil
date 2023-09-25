//your JS code here. If required.
#container {
    margin: 20px;
    position: relative; /* Set position to relative for pseudo-elements to work */
}

#container::before {
    content: "Before Text";
    color: #f00;
    font-size: 20px;
    position: absolute;
    top: 0;
    left: -100px; /* Adjust the position as needed */
}

#container::after {
    content: "After Text";
    color: #f00;
    font-size: 20px;
    position: absolute;
    bottom: 0;
    right: -100px; /* Adjust the position as needed */
}
