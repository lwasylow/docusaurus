---
id: version-1.0.0-ut_reporter_base
title: ut_reporter_base
original_id: ut_reporter_base
---

# UT_REPORTER_BASE






- [INIT Procedure](#init)
- [GET_SUPPORTED_EVENTS Function](#get_supported_events)
- [ON_EVENT Procedure](#on_event)












 
## INIT Procedure<a name="init"></a>


<p>
<p>utPLSQL - Version 3<br />  Copyright 2016 - 2017 utPLSQL Project</p><p>  Licensed under the Apache License, Version 2.0 (the &quot;License&quot;):<br />  you may not use this file except in compliance with the License.<br />  You may obtain a copy of the License at</p><pre><code>  http://www.apache.org/licenses/LICENSE-2.0</code></pre><p>  Unless required by applicable law or agreed to in writing, software<br />  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,<br />  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br />  See the License for the specific language governing permissions and<br />  limitations under the License.</p>
</p>

### Syntax
```plsql
final member procedure init(self in out nocopy ut_reporter_base, a_self_type varchar2)
```

 





 
## GET_SUPPORTED_EVENTS Function<a name="get_supported_events"></a>


<p>
<p>Returns the list of events that are supported by particular implementation of the reporter</p>
</p>

### Syntax
```plsql
overriding member function get_supported_events return ut_varchar2_list,
```

 





 
## ON_EVENT Procedure<a name="on_event"></a>


<p>
<p>Delegates execution of event into individual reporting procedures</p>
</p>

### Syntax
```plsql
overriding member procedure on_event( self in out nocopy ut_reporter_base, a_event_name varchar2, a_event_item ut_event_item)

)
not final not instantiable
/
```

 





 
