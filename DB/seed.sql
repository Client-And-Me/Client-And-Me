
--appointments--

INSERT INTO clientandme.appointments (`id`, `title`, `allDay`, `start`, `end`, `color`, `client_id`, `firebase_id`, `createdAt`, `updatedAt`) 
VALUES ('1', 'Jess Smith', '0', '2018-10-08 15:30:00', '2018-10-08 16:00:00', 'blue', 'AgbiCSjf3TO7ZoKTDGsSrZvWcuC3', 'zK6hnPTH0iU2yV8k1U6Imf4HzN43', '2018-10-04 20:04:21', '2018-10-04 20:04:21');
INSERT INTO clientandme.appointments (`id`, `title`, `allDay`, `start`, `end`, `color`, `client_id`, `firebase_id`, `createdAt`, `updatedAt`) 
VALUES ('2', 'Tobey McGuire', '0', '2018-10-08 15:30:00', '2018-10-08 16:00:00', 'blue', 'jkzb8ld7cnPCRityY5fL4BnwCnB3', '4yIL3Q3I9YPVmMTiz4qbqhzt6HD2', '2018-10-04 20:04:21', '2018-10-04 20:04:21');
INSERT INTO clientandme.appointments (`id`, `title`, `allDay`, `start`, `end`, `color`, `client_id`, `firebase_id`, `createdAt`, `updatedAt`) 
VALUES ('3', 'Bam Mcbamerson', '0', '2018-10-08 15:30:00', '2018-10-08 16:00:00', 'blue', 'gzE2esQhjlNeZVK6qURYNuKxDJL2', 'wIukxTpEQ6NoMdKPxWbzQVOyDyK2', '2018-10-04 20:04:21', '2018-10-04 20:04:21');


--clients--

INSERT INTO clientandme.clients (`id`, `first_name`, `last_name`, `user_id`, `firebase_id`, `email`, `createdAt`, `updatedAt`) 
VALUES ('1', 'Jess', 'Smith', 'jess.smith123', 'AgbiCSjf3TO7ZoKTDGsSrZvWcuC3', 'jess.smith123@email.com', '2018-10-05 17:30:22', '2018-10-05 17:30:22');
INSERT INTO clientandme.clients (`id`, `first_name`, `last_name`, `user_id`, `firebase_id`, `email`, `createdAt`, `updatedAt`) 
VALUES ('2', 'Tobey', 'McGuire', 'tobeyspiderman', 'jkzb8ld7cnPCRityY5fL4BnwCnB3', 'tobeyspiderman@email.com', '2018-10-05 17:33:22', '2018-10-05 17:33:22');
INSERT INTO clientandme.clients (`id`, `first_name`, `last_name`, `user_id`, `firebase_id`, `email`, `createdAt`, `updatedAt`) 
VALUES ('3', 'Bam', 'Mcbamerson', 'bammcbam', 'gzE2esQhjlNeZVK6qURYNuKxDJL2', 'bammcbam@msn.com', '2018-10-05 17:35:09', '2018-10-05 17:35:09');


--notes--

INSERT INTO clientandme.notes (`id`, `note`, `client_id`, `appointment_id`, `firebase_id`, `createdAt`, `updatedAt`) 
VALUES ('1', 'Ony likes 80s music', '1', '1', 'zK6hnPTH0iU2yV8k1U6Imf4HzN43', '2018-10-05 17:45:10', '2018-10-05 17:45:10');
INSERT INTO clientandme.notes (`id`, `note`, `client_id`, `appointment_id`, `firebase_id`, `createdAt`, `updatedAt`) 
VALUES ('2', 'Pretty unsure of himself tbh', '2', '2', '4yIL3Q3I9YPVmMTiz4qbqhzt6HD2', '2018-10-05 17:45:52', '2018-10-05 17:45:52');
INSERT INTO clientandme.notes (`id`, `note`, `client_id`, `appointment_id`, `firebase_id`, `createdAt`, `updatedAt`) 
VALUES ('3', 'Always skips leg day', '3', '3', 'wIukxTpEQ6NoMdKPxWbzQVOyDyK2', '2018-10-05 17:46:16', '2018-10-05 17:46:16');

--pc_join--

INSERT INTO clientandme.pc_joins (`id`, `provider_id`, `client_id`, `createdAt`, `updatedAt`) 
VALUES ('1', 'zK6hnPTH0iU2yV8k1U6Imf4HzN43', 'AgbiCSjf3TO7ZoKTDGsSrZvWcuC3', '2018-10-05 17:46:16', '2018-10-05 17:46:16');
INSERT INTO clientandme.pc_joins (`id`, `provider_id`, `client_id`, `createdAt`, `updatedAt`) 
VALUES ('2', '4yIL3Q3I9YPVmMTiz4qbqhzt6HD2', 'jkzb8ld7cnPCRityY5fL4BnwCnB3', '2018-10-05 17:46:16', '2018-10-05 17:46:16');
INSERT INTO clientandme.pc_joins (`id`, `provider_id`, `client_id`, `createdAt`, `updatedAt`) 
VALUES ('3', 'wIukxTpEQ6NoMdKPxWbzQVOyDyK2', 'gzE2esQhjlNeZVK6qURYNuKxDJL2', '2018-10-05 17:46:16', '2018-10-05 17:46:16');


--ProductsUsed--

INSERT INTO clientandme.productsuseds (`id`, `product_name`, `appointment_id`, `client_id`, `firebase_id`, `qty`, `createdAt`, `updatedAt`) 
VALUES ('1', 'Hair Color', '2', 'jkzb8ld7cnPCRityY5fL4BnwCnB3', '4yIL3Q3I9YPVmMTiz4qbqhzt6HD2', '1', '2018-10-05 17:48:12', '2018-10-05 17:48:12');
INSERT INTO clientandme.productsuseds (`id`, `product_name`, `appointment_id`, `client_id`, `firebase_id`, `qty`, `createdAt`, `updatedAt`) 
VALUES ('2', 'Eyeliner', '2', 'jkzb8ld7cnPCRityY5fL4BnwCnB3', '4yIL3Q3I9YPVmMTiz4qbqhzt6HD2', '1', '2018-10-05 17:48:12', '2018-10-05 17:48:12');
INSERT INTO clientandme.productsuseds (`id`, `product_name`, `appointment_id`, `client_id`, `firebase_id`, `qty`, `createdAt`, `updatedAt`) 
VALUES ('3', 'Black Shirt', '2', 'jkzb8ld7cnPCRityY5fL4BnwCnB3', '4yIL3Q3I9YPVmMTiz4qbqhzt6HD2', '1', '2018-10-05 17:48:12', '2018-10-05 17:48:12');

--Provider--

INSERT INTO clientandme.providers (`id`, `first_name`, `last_name`, `brand_name`, `firebase_id`, `phone`, `email`, `address1`, `city`, `state`, `zip`, `createdAt`, `updatedAt`) 
VALUES ('1', 'Trevis', 'Sucks', 'DJ Jazzy Jeff', 'zK6hnPTH0iU2yV8k1U6Imf4HzN43', '801-555-4321', 'trevis-sucks@your-mom.com', '1500 w 8500 s', 'Sucksville', 'IL', '40401', '2018-10-04 20:04:21', '2018-10-04 20:04:21');
INSERT INTO clientandme.providers (`id`, `first_name`, `last_name`, `brand_name`, `firebase_id`, `phone`, `email`, `address1`, `city`, `state`, `zip`, `createdAt`, `updatedAt`) 
VALUES ('2', 'Ani', 'Skywalker', 'Galaxy Domination Coaching', '4yIL3Q3I9YPVmMTiz4qbqhzt6HD2', '104-668-4258', 'vader@msn.com', '246 e Tatooine Dr', 'Tatooine', 'AL', '65894', '2018-10-04 18:47:15', '2018-10-04 18:47:15');
INSERT INTO clientandme.providers (`id`, `first_name`, `last_name`, `brand_name`, `firebase_id`, `phone`, `email`, `address1`, `address2`, `city`, `state`, `zip`, `createdAt`, `updatedAt`) 
VALUES ('3', 'Bill', 'Kellfin', 'Personal Training by Bill', 'wIukxTpEQ6NoMdKPxWbzQVOyDyK2', '425-664-0008', 'bkell@msn.com', '66 w 4000 s', 'Apt 22', 'Los Angeles', 'CA', '90210', '2018-10-04 19:16:07', '2018-10-04 19:16:07');