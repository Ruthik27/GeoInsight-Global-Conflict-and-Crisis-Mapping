# GeoInsight: Global Conflict and Crisis Mapping

Welcome to **Global Event Mapper**, an interactive web application designed to visualize and explore geopolitical and social events across the globe. Leveraging robust data from the Armed Conflict Location & Event Data Project (ACLED), our platform allows users to dynamically filter events by type, region, and more, displayed through an intuitive map interface.

---

### Have a Look at the Live Demo currently hosted by the ITOS Division:
https://acled-codviz.itos.uga.edu/

## Features

- **Dynamic Event Filtering**: Interact with multiple filters such as Disorder Type, Event Type, Sub Event Type, Year, Country, and Region to drill down into the events that matter most to you.
- **Real-Time Data Visualization**: Utilizes Leaflet.js integrated with MarkerCluster for efficient and clear display of events even in densely populated areas.
- **Responsive Design**: Crafted to provide a seamless experience across all devices.
- **Data Caching**: Implements server-side caching to optimize data retrieval and reduce load times.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (jQuery)
- **Mapping**: Leaflet.js with Leaflet.markercluster
- **Backend**: Node.js with Express.js
- **Data Fetching**: Axios for API requests
- **Environment Management**: dotenv for handling environment variables

<img width="689" alt="image" src="https://github.com/Ruthik27/GeoInsight-Global-Conflict-and-Crisis-Mapping/assets/62241739/dbd1e7ca-352b-4857-bd9a-7158595934b0">

## Getting Started

### Prerequisites

- Node.js and npm installed:
  ```bash
  node --version
  npm --version
  ```

- Docker installed (for Docker-based setup):
  ```bash
  docker --version
  ```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ruthik27/GeoInsight-Global-Conflict-and-Crisis-Mapping.git
   cd GeoInsight-Global-Conflict-and-Crisis-Mapping
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configuration**:
   Create a `.env` file in the root directory and add your ACLED API key and email:
   ```plaintext
   ACLEDDATA_API_KEY=your_acled_api_key
   ACLEDDATA_EMAIL=your_email_used_for_registration
   ```

### Running the Application

- **Locally**:
  ```bash
  npm start
  ```
  Access the application at `http://localhost:3000`.

- **Using Docker**:
  - Build the Docker image:
    ```bash
    docker build -t GeoInsight-Global-Conflict-and-Crisis-Mapping .
    ```
  - Run the application in a Docker container:
    ```bash
    docker run -p 3000:3000 GeoInsight-Global-Conflict-and-Crisis-Mapping
    ```
  Access the application at `http://localhost:3000`.

## Docker Commands

- **View Running Containers**:
  ```bash
  docker ps
  ```
- **Stop a Running Container**:
  ```bash
  docker stop <container_id>
  ```
- **Remove a Container**:
  ```bash
  docker rm <container_id>
  ```
- **List Docker Images**:
  ```bash
  docker images
  ```
- **Remove a Docker Image**:
  ```bash
  docker rmi <image_id>
  ```

<img width="1496" alt="image" src="https://github.com/Ruthik27/GeoInsight-Global-Conflict-and-Crisis-Mapping/assets/62241739/b5889ff7-4650-47e0-abe1-fd26d0b7abcf">

---

<img width="1496" alt="image" src="https://github.com/Ruthik27/GeoInsight-Global-Conflict-and-Crisis-Mapping/assets/62241739/c939dac1-6a22-4c17-88bb-1b56b21a3ea1">


## Contributing

Contributions are welcome! To contribute:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/Ruthik27/GeoInsight-Global-Conflict-and-Crisis-Mapping](https://github.com/Ruthik27/GeoInsight-Global-Conflict-and-Crisis-Mapping)

## Support

<img width="410" alt="image" src="https://github.com/Ruthik27/Building_Detection/assets/62241739/5283e144-4209-4b53-836b-e0a5c13ccd33">

<img width="409" alt="image" src="https://github.com/Ruthik27/Building_Detection/assets/62241739/cd357b20-f5f3-42cc-884d-75042cd12585">

<img width="369" alt="image" src="https://github.com/Ruthik27/GeoInsight-Global-Conflict-and-Crisis-Mapping/assets/62241739/82336157-be0d-4b33-856c-341ec62c7943">



---

https://www.cviog.uga.edu/information-technology/
