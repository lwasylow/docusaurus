---
id: ut_event_listener
title: ut_event_listener
---

# UT_EVENT_LISTENER




- [Variables](#variables)


- [GET_SUPPORTED_EVENTS Function](#get_supported_events)
- [ON_EVENT Procedure](#on_event)



## Variables<a name="variables"></a>

Name | Code | Description
--- | --- | ---
self_type | <pre>self_type    varchar2(250 byte),;</pre> | 








 
## GET_SUPPORTED_EVENTS Function<a name="get_supported_events"></a>


<p>
<p>Returns the list of events that are supported by particular implementation of the reporter</p>
</p>

### Syntax
```plsql
not instantiable member function get_supported_events return ut_varchar2_list,
```

 





 
## ON_EVENT Procedure<a name="on_event"></a>


<p>
<p>Executes an action for a given event name</p>
</p>

### Syntax
```plsql
not instantiable member procedure on_event( self in out nocopy ut_event_listener, a_event_name varchar2, a_event_item ut_event_item)
) not final not instantiable
/
```

 





 
