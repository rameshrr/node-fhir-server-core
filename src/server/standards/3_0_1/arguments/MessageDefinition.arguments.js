module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-category',
		documentation: 'The behavior associated with the message.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-date',
		documentation: 'The message definition publication date.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-description',
		documentation: 'The description of the message definition.',
	},
	EVENT: {
		name: 'event',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-event',
		documentation: 'The event that triggers the message.',
	},
	FOCUS: {
		name: 'focus',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-focus',
		documentation: 'A resource that is a permitted focus of the message.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-identifier',
		documentation: 'External identifier for the message definition.',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-jurisdiction',
		documentation: 'Intended jurisdiction for the message definition.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-name',
		documentation: 'Computationally friendly name of the message definition.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-publisher',
		documentation: 'Name of the publisher of the message definition.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-status',
		documentation: 'The current status of the message definition.',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-title',
		documentation: 'The human-friendly name of the message definition.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-url',
		documentation: 'The uri that identifies the message definition.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageDefinition-version',
		documentation: 'The business version of the message definition.',
	},
};