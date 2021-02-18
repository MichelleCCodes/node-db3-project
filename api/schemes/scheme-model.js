const db = require('../../data/db-config')

module.exports = {
    find, 
    findById, 
    findSteps, 
    add, 
    update, 
    remove
}

function find(){
    return db('schemes')
}

function findById(id){
    if (!id) {
        return Promise.resolve(null)
    } else {
        return db('schemes')
        .select("schemes.id", "schemes.scheme_name")
        .where("schemes.id", id)
        .first()
    }
    // - Resolve to a _single_ scheme object.
    // - On an invalid `id`, resolves to `null`, perhaps by doing `if (!schemaObject) 
    // return Promise.resolve(null)`.
}

function findSteps(id){
return db('steps')
.join("schemes", "schemes.id", "steps.scheme_id")
.select("schemes.scheme_name", "steps.step_number", "steps.instructions")
.orderBy("steps.step_number", "asc")
.where("schemes.id", id)
}

function add(scheme){
    return db('schemes')
    .insert(scheme)
    .then(ids => {
        return findById(ids[0])
    })
    // - Expects a scheme object.
    // - Inserts scheme into the database.
    // - Resolves to the newly inserted scheme, including `id`.
}

function update(changes, id){
    return db("schemes")
    .where('schemes.id', id)
    .update(changes);
    // - Expects a changes object and an `id`.
    // - Updates the scheme with the given id.
    // - Resolves to the newly updated scheme object.
}

function remove(id){
    return db("schemes")
    .where ('schemes.id', id)
    .del()
    // - Removes the scheme object with the provided id.
    // - Resolves to the removed scheme
    // - Resolves to `null` on an invalid id.
    // - (Hint: Only worry about removing the `scheme`. 
    // The database is configured to automatically remove all associated steps.)
}
