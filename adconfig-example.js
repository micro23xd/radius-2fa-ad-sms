// example active directory configuration (to use it rename to adconfig.js)

var adconfig = { 
	domain: 'domain.com',
	url: 'ldap://dc.domain.com',
	baseDN: 'dc=domain,dc=com',
	username: 'user@domain.com',
	password: 'userspassword',
	attributes: { user: [ 'dn', 'userPrincipalName', 'sAMAccountName', 'mail', "displayName", "telephoneNumber", 'mobile'  ] }
}

module.exports = adconfig