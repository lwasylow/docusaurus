---
id: version-1.0.0-ut_tfs_junit_reporter
title: ut_tfs_junit_reporter
original_id: ut_tfs_junit_reporter
---

# UT_TFS_JUNIT_REPORTER




- [Variables](#variables)

- [Exceptions](#exceptions)

- [UT_TFS_JUNIT_REPORTER Function](#ut_tfs_junit_reporter)



## Variables<a name="variables"></a>

Name | Code | Description
--- | --- | ---
end | <pre>    end loop;</pre> | 
end | <pre>  end loop;</pre> | 
end | <pre>end if;</pre> | 
l_suite | <pre>l_suite       ut_suite;</pre> | 
l_outputs | <pre>l_outputs     clob;</pre> | 
l_errors | <pre>l_errors      ut_varchar2_list;</pre> | 
end | <pre>  end if;</pre> | 
end | <pre>end loop;</pre> | 
end | <pre>    end if;</pre> | 
end | <pre>  end loop;</pre> | 
 | <pre>  l_suite := treat(a_suite as ut_suite);</pre> | 
 | <pre>  l_outputs := l_suite.get_serveroutputs();</pre> | 
else | <pre>  else <br />    self.print_text('<system-out/>');</pre> | 
end | <pre>  end if;</pre> | 
 | <pre>  l_errors := l_suite.get_error_stack_traces();</pre> | 
else | <pre>  else<br />    self.print_text('<system-err/>');</pre> | 
end | <pre>  end if;</pre> | 
end | <pre>end if;</pre> | 
begin | <pre> <br /><br />  begin<br />    l_suite_id := 0;</pre> | 
end | <pre>    end loop;</pre> | 



## Exceptions<a name="exceptions"></a>

Name | Code | Description
--- | --- | ---
end | <pre>    end loop;</pre> | 
end | <pre>  end loop;</pre> | 
end | <pre>end if;</pre> | 
l_suite | <pre>l_suite       ut_suite;</pre> | 
l_outputs | <pre>l_outputs     clob;</pre> | 
l_errors | <pre>l_errors      ut_varchar2_list;</pre> | 
end | <pre>  end if;</pre> | 
end | <pre>end loop;</pre> | 
end | <pre>    end if;</pre> | 
end | <pre>  end loop;</pre> | 
 | <pre>  l_suite := treat(a_suite as ut_suite);</pre> | 
 | <pre>  l_outputs := l_suite.get_serveroutputs();</pre> | 
else | <pre>  else <br />    self.print_text('<system-out/>');</pre> | 
end | <pre>  end if;</pre> | 
 | <pre>  l_errors := l_suite.get_error_stack_traces();</pre> | 
else | <pre>  else<br />    self.print_text('<system-err/>');</pre> | 
end | <pre>  end if;</pre> | 
end | <pre>end if;</pre> | 
begin | <pre> <br /><br />  begin<br />    l_suite_id := 0;</pre> | 
end | <pre>    end loop;</pre> | 




 
## UT_TFS_JUNIT_REPORTER Function<a name="ut_tfs_junit_reporter"></a>


<p>
<p>utPLSQL - Version 3<br />  Copyright 2016 - 2017 utPLSQL Project</p><p>  Licensed under the Apache License, Version 2.0 (the &quot;License&quot;):<br />  you may not use this file except in compliance with the License.<br />  You may obtain a copy of the License at</p><pre><code>  http://www.apache.org/licenses/LICENSE-2.0</code></pre><p>  Unless required by applicable law or agreed to in writing, software<br />  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,<br />  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br />  See the License for the specific language governing permissions and<br />  limitations under the License.</p>
</p>

### Syntax
```plsql
constructor function ut_tfs_junit_reporter(self in out nocopy ut_tfs_junit_reporter) return self
```

 





 
