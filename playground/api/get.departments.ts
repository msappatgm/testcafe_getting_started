/**
 * @desc In this exercise, you will practice chaining requests. First you'll hardcode one of the departments and the id
 * Then you'll make a GET request to the departments endpoint
 * Then you'll validate your hardcoded data is found in the endpoint response 
 * @hint you'll need to make the GET request in a browser of your choice or in POSTMAN to get the data to hard code
 */

import { fixture } from "testcafe";
import chai, { expect } from "chai";
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

fixture `Testing API`

test('Create a GET request to the roster/profile Collection', async t => {
    const endpoint = 'https://digital.dev.greatminds.dev/roster/roster/profile'; 
    const response = await chai.request(endpoint).get('');  

    expect(response.status).to.equal(200);

    const { total, objectIDs } = response.body;
    
    expect(total).to.be.a('number');
    expect(objectIDs).to.be.a('array');
    expect(objectIDs).to.have.lengthOf(total);
    expect(objectIDs[0]).to.be.a('number');
});
