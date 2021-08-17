
class Ping
{
    index()
    {
        return new Promise(function (resolve) {
            resolve({
                'a' : 'v'
            })
        })
    }
}

module.exports = new Ping();