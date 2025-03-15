# BorrowBridge 2.0

BorrowBridge was conceptualized at the DeFy'24 Hackathon with the aim of connecting tier-3 city fundraisers with urban investors. The original idea included a staking-based model where fundraisers would stake assets to instill investor confidence. However, this was critiqued as it conflicted with the purpose of fundraising itself.

To refine the concept, the platform was simplified into a transparent, blockchain-powered crowdfunding solution. It now enables campaigns without requiring fundraisers to stake assets, focusing solely on connecting ideas with support.

This project is built with **Solidity** for smart contracts, deployed via **Thirdweb**, and uses **React** and **Tailwind CSS** for the front end.

---
## UI

![image](https://github.com/user-attachments/assets/4f4b3c34-4670-4ceb-a98a-c28c7bc24fa0)

![image](https://github.com/user-attachments/assets/feb2de3c-8f9f-4d55-a86e-4c4e325a359e)

---

## System Design Overview

```plaintext
-------------------------------------------------------------
|                        BorrowBridge                       |
-------------------------------------------------------------
|                          Users                            |
|-----------------------------------------------------------|
|  - Campaign Creators                                      |
|  - Donators                                               |
-------------------------------------------------------------

       ⬇ User Interaction (React + Tailwind CSS)

-------------------------------------------------------------
|                        Frontend                           |
|-----------------------------------------------------------|
|  - Campaign creation form                                 |
|  - Donation interface                                     |
|  - Real-time updates                                      |
-------------------------------------------------------------

       ⬇ API Calls to Smart Contracts (Thirdweb SDK)

-------------------------------------------------------------
|                    Backend (Smart Contract)               |
|-----------------------------------------------------------|
|  - createCampaign(address owner, ...)                     |
|  - donateToCampaign(uint256 id)                           |
|  - getDonators(uint256 id)                                |
|  - getCampaigns()                                         |
-------------------------------------------------------------

       ⬇ Blockchain Transactions (via Smart Contract)

-------------------------------------------------------------
|                       Blockchain                          |
|-----------------------------------------------------------|
|  - Stores campaign data                                   |
|  - Tracks donations and contributors                      |
|  - Provides transparency and immutability                 |
-------------------------------------------------------------
```
---

### Smart Contract Details

The **CrowdFunding** smart contract includes:

1. **Campaign Struct**: Holds campaign details like title, target, deadline, and contributions.
2. **Functions**:
   - `createCampaign`: Allows users to initiate campaigns.
   - `donateToCampaign`: Facilitates donations in ETH.
   - `getDonators`: Fetches a list of contributors for a campaign.
   - `getCampaigns`: Retrieves all active campaigns.

---

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Solidity
- **Blockchain**: Deployed on **Thirdweb**

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MaheepTulsian/BorrowBridge2.0.git
   cd BorrowBridge2.0
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Ensure the smart contract is deployed and integrated using Thirdweb.

---

## Future Enhancements Possibilities

- Milestone-based fund releases.
- User ratings and feedback.
  
---

## Contributions

Feel free to raise issues or contribute to this project. Fork the repository, make your changes, and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
