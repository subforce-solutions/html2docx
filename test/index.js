const html2docx = require('../index');
const fs = require('fs');
const assert = require('assert');

describe('html2docx', function(){

    describe('create', function(){

        it('Should return a buffer', function(){
            return html2docx.create(fs.readFileSync(`${__dirname}/sample.html`))
            .then(buffer => {
                assert(buffer instanceof Buffer)
            })
        });

    })

})
